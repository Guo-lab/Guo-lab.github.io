import os
import sys
from moviepy.editor import VideoFileClip
from PIL import Image
import imageio
import pygifsicle


def compress_gif_with_gifsicle(gif_path, output_gif_path, compression_level=3):
    """Compress a GIF using gifsicle."""
    os.system(f"gifsicle -O{compression_level} --colors 256 {gif_path} > {output_gif_path}")
    print(f"Compressed GIF saved to {output_gif_path}")


def convert_mp4_to_gif_with_moviepy(mp4_path, gif_path, fps=27, quality=50):
    """Convert an MP4 file to a GIF and optimize its size."""
    video_clip = VideoFileClip(mp4_path)
    video_clip.write_gif(gif_path, fps=fps, program='ffmpeg')

    base_name = os.path.splitext(gif_path)[0]
    renamed_gif_path = f"{base_name}_.gif"
    compress_gif_with_gifsicle(gif_path, renamed_gif_path, compression_level=3)

    print(f"GIF saved to {gif_path}")


# largest
def convert_mp4_to_gif(inputpath, outputpath):
    """
    Reference: http://imageio.readthedocs.io/en/latest/examples.html#convert-a-movie
    """
    reader = imageio.get_reader(inputpath)
    fps = reader.get_meta_data()['fps']

    writer = imageio.get_writer(outputpath, fps=fps)
    for i, im in enumerate(reader):
        sys.stdout.write("\rframe {0}".format(i))
        sys.stdout.flush()
        writer.append_data(im)

    print("\r\nFinalizing...")
    writer.close()
    print("Done.")


# second large
def convert_mp4_to_gif_with_imageio(mp4_path, gif_path, fps=15):
    """Convert an MP4 file to a GIF and optimize its size without resizing."""
    reader = imageio.get_reader(mp4_path)
    frames = []
    for frame in reader:
        frames.append(frame)

    imageio.mimsave(gif_path, frames, duration=1/fps)
    pygifsicle.optimize(gif_path)

    print(f"GIF saved to {gif_path}")


with_imageio = False
with_moviepy = True


def convert_mp4s_in_folder(parent_folder, fps=27, quality=50):
    """Convert all MP4 files in the given folder and its subfolders."""
    for root, dirs, files in os.walk(parent_folder):
        for file in files:
            if file.lower().endswith('.mp4'):
                mp4_path = os.path.join(root, file)
                gif_path = os.path.join(root, f"{os.path.splitext(file)[0]}.gif")
                if with_imageio is True:
                    convert_mp4_to_gif_with_imageio(mp4_path, gif_path, fps)
                elif with_moviepy is True:
                    convert_mp4_to_gif_with_moviepy(mp4_path, gif_path, fps, quality)
                else:
                    convert_mp4_to_gif(mp4_path, gif_path)


# Example usage:
parent_folder = "./projects/mmpug"
convert_mp4s_in_folder(parent_folder)
