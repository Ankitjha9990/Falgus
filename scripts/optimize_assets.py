import os
from PIL import Image

ASSETS_DIR = 'public/assets'

def optimize_images():
    print("Starting image optimization...")
    total_orig = 0
    total_opt = 0

    # Photos to create responsive mobile versions for
    responsive_photos = [
        'photography/Hero-Section-Big Musrooms.png',
        'photography/For-farmers-main-image.png',
        'photography/Problem-section-Main-image.png',
        'photography/For-Buyers-main-image.png',
        'photography/Contact-section-Bg-Image.png'
    ]

    for root, dirs, files in os.walk(ASSETS_DIR):
        for f in files:
            if not f.endswith('.png'):
                continue
            
            src_path = os.path.join(root, f)
            rel_path = os.path.relpath(src_path, ASSETS_DIR).replace('\\', '/')
            orig_size = os.path.getsize(src_path)
            total_orig += orig_size

            webp_path = os.path.splitext(src_path)[0] + '.webp'
            
            try:
                with Image.open(src_path) as im:
                    # Save standard full-size WebP
                    if 'photography' in rel_path:
                        im.save(webp_path, 'WEBP', quality=82, method=6)
                    else:
                        im.save(webp_path, 'WEBP', quality=85, method=6)

                    opt_size = os.path.getsize(webp_path)
                    total_opt += opt_size
                    print(f"Optimized: {rel_path} -> {orig_size/1024:.1f} KB -> {opt_size/1024:.1f} KB ({((orig_size-opt_size)/orig_size)*100:.1f}% saved)")

                    # Check for responsive mobile variant
                    if rel_path in responsive_photos:
                        mobile_name = os.path.splitext(src_path)[0] + '-mobile.webp'
                        # Calculate mobile dimensions (max width 720px, maintaining aspect ratio)
                        w, h = im.size
                        if w > 720:
                            new_w = 720
                            new_h = int(h * (720 / w))
                            im_mobile = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
                            im_mobile.save(mobile_name, 'WEBP', quality=80, method=6)
                            m_size = os.path.getsize(mobile_name)
                            print(f"  Mobile variant: {os.path.basename(mobile_name)} -> {m_size/1024:.1f} KB ({new_w}x{new_h})")
            except Exception as e:
                print(f"Error processing {src_path}: {e}")

    print("\n--- Summary ---")
    print(f"Total Original PNG Size: {total_orig / (1024*1024):.2f} MB")
    print(f"Total WebP Size:         {total_opt / (1024*1024):.2f} MB")
    print(f"Total Savings:           {(total_orig - total_opt) / (1024*1024):.2f} MB ({((total_orig - total_opt)/total_orig)*100:.1f}%)")

if __name__ == '__main__':
    optimize_images()
