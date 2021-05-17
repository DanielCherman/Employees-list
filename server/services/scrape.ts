import { cpus } from 'os';
import { Browser } from 'puppeteer';

export const scrape = async (browser: Browser) => {
  const perChunk = 6 * cpus().length
  console.log("Chunk size", perChunk)

  const page = await browser.newPage();
  await page.goto('https://tretton37.com/meet');
  await page.waitForSelector("div.contact-info")
  const contactInfo = await page.evaluate(() => {
    const contactInfoMapper = (el: Element) => {
      const [_, h1, text, nav] = Array.from(el.childNodes)
      const [firstName, lastName, location] = h1.textContent?.split(" ") as string[]

      return {
        firstName,
        lastName,
        location,
        nav: (nav as any).children[0].href
      }
    }

    return Array.from(document.querySelectorAll("div.contact-info")).map((el) => contactInfoMapper(el))
  });

  await page.close()

  const chunks = contactInfo.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [] as any[][])

  const results = []

  for (const chunk of chunks) {
    console.log("Processing chunk", chunks.indexOf(chunk), "/", chunks.length)

    const data = await Promise.all(
      chunk.map(async ({ nav, ...data }) => {
        const page = await browser.newPage()
        await page.goto(nav)

        const details = await page.evaluate(() => {
          const description = (document.querySelector(".main-ninja-text") as HTMLDivElement).innerHTML
          const avatarPhoto = (document.querySelector(".portrait-big>img") as HTMLImageElement).src
          const portraitPhoto = (document.querySelector(".ninja-header > svg > g > image") as any).href.baseVal
          const fullName = (document.querySelector("article>h1") as HTMLHeadingElement).innerText
          return {
            description,
            avatarPhoto,
            portraitPhoto,
            fullName
          }
        });

        await page.close()

        return {
          ...details,
          ...data
        }
      }))

    results.push(...data)
  }

  console.log("Total results", results.length)

  return results
}