import fs from 'node:fs'
import util from 'node:util'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { exec } from 'node:child_process'
import { describe, test, expect } from '@jest/globals'


describe('envWrite', () => {
  test('writes', async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const envWritePath = join(__dirname, '../envWrite.js')
    const envPath = join(__dirname, '../../.env')
    const promiseExec = util.promisify(exec)

    // clear contents of .env
    await fs.promises.writeFile(envPath, '')

    // add local info to .env
    const r1 = await promiseExec(`node ${ envWritePath } PUBLIC_ENVIRONMENT=local PUBLIC_HOST=http://localhost:5173`)
    if (r1.stderr) throw r1.stderr
    let envText = await fs.promises.readFile(envPath, 'utf-8')
    expect(r1.stdout.replace(/\n/g, '')).toBe('💚 Successfully updated .env file')
    expect(envText.match(/PUBLIC_HOST/g)?.length).toEqual(1)
    expect(envText.match(/PUBLIC_ENVIRONMENT/g)?.length).toEqual(1)
    expect(envText.includes("PUBLIC_ENVIRONMENT='local'")).toBe(true)
    expect(envText.includes("PUBLIC_HOST='http://localhost:5173'")).toBe(true)

    // add main info to .env
    const r2 = await promiseExec(`node ${ envWritePath } PUBLIC_ENVIRONMENT=main PUBLIC_HOST=https://feelinglovelynow`)
    if (r2.stderr) throw r2.stderr
    envText = await fs.promises.readFile(envPath, 'utf-8')
    expect(r2.stdout.replace(/\n/g, '')).toBe('💚 Successfully updated .env file')
    expect(envText.match(/PUBLIC_HOST/g)?.length).toEqual(1)
    expect(envText.match(/PUBLIC_ENVIRONMENT/g)?.length).toEqual(1)
    expect(envText.includes("PUBLIC_ENVIRONMENT='main'")).toBe(true)
    expect(envText.includes("PUBLIC_HOST='https://feelinglovelynow'")).toBe(true)
  })
})
