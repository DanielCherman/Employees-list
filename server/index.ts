import express from "express"
import puppeteer, { Browser } from "puppeteer"
import { scrape } from "./services/scrape"
import cors from "cors"

const app = express()

app.use(cors())

let employees: any = []

const scrapeEmployees = async (browser: Browser) => {
  console.log("Scraping Employees")
  employees = await scrape(browser)
}

app.get("/", (_, res) => res.json(employees))

const run = async () => {
  const browser = await puppeteer.launch({
    ...(process.env.NODE_ENV !== 'production' ? {
      executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
      headless: false
    } : {})
  });
  console.log("Scraping before start")
  await scrapeEmployees(browser)
  console.log("Starting")
  app.listen(process.env.PORT ?? 3000)
  setInterval(() => scrapeEmployees(browser), 1000 * 60 * 60 * 12)
}
run()