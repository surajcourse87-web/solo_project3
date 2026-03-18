# Watch Image Sequence Setup Guide

## Using Your Own Watch Images

You have watch images in your project. Here's how to integrate them:

### Option 1: Use Existing Images (Quick Start)

If you have the 3 watch images already:
- `Whisk_73d3f35287170aab34748e897fbe41dbdr.png`
- `Whisk_90092798d9e2f5e9aab47e0a058e1b7cdr.png`
- `Whisk_e65142418c79424b00e4e793ec0f5519dr.png`

Move them to `public/` and update `ScrollStory.tsx` to use them as keyframes.

### Option 2: Extract Frames from Video

You have: `Smoothly_transition_from_the_assembled_product_to__99027de143.mp4`

Extract 120 frames using FFmpeg:

```bash
# Install FFmpeg first (if not installed)
# Windows: choco install ffmpeg
# Mac: brew install ffmpeg

# Extract frames
ffmpeg -i Smoothly_transition_from_the_assembled_product_to__99027de143.mp4 -vf "fps=120/$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 Smoothly_transition_from_the_assembled_product_to__99027de143.mp4)" public/frames/frame_%04d.jpg
```

### Option 3: Use the ZIP Archive

Extract `ezgif-8f68a708c8e5fffe-jpg.zip` to `public/frames/`

```bash
# Windows
tar -xf ezgif-8f68a708c8e5fffe-jpg.zip -C public/frames/

# Or use Windows Explorer to extract
```

## Current Implementation

The current code uses a **procedural canvas animation** that draws a watch explosion effect in real-time. This works immediately without any images.

## Switching to Image Sequence

Once you have frames in `public/frames/`, the canvas will automatically try to load them. The current code in `ScrollStory.tsx` is set up for this.

## Testing

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` and scroll to see the cinematic experience.

## Performance Tips

- Use JPG format for frames (smaller file size)
- Optimize images to 1920x1080 or 1280x720
- Consider using WebP format for better compression
- Preload critical frames for smoother playback
