import sharp from 'sharp'

const files = [
  'public/images/bayou-wordmark.png',
  'public/images/bayou-emblem.png',
]

for (const file of files) {
  const img = sharp(file).ensureAlpha()
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  const out = Buffer.from(data)

  for (let i = 0; i < out.length; i += channels) {
    const r = out[i]
    const g = out[i + 1]
    const b = out[i + 2]
    // Near-white pixels become fully transparent; light-gray edges get partial alpha for smooth edges.
    const min = Math.min(r, g, b)
    if (r > 240 && g > 240 && b > 240) {
      out[i + 3] = 0
    } else if (min > 205) {
      // feather the anti-aliased white halo
      out[i + 3] = Math.round(((255 - min) / (255 - 205)) * 255)
    }
  }

  await sharp(out, { raw: { width, height, channels } })
    .png()
    .toFile(file.replace('.png', '-transparent.png'))
  console.log('processed', file)
}
