export interface GalleryItem {
  id: string
  image: string
}

const galleryImages = [
  '/gallery/max-1.jpg',
  '/gallery/max-2.jpg',
  '/gallery/max-3.jpg',
  '/gallery/max-4.jpg',
  '/gallery/max-5.jpg',
  '/gallery/max-6.jpg',
  '/gallery/max-7.jpg',
  '/gallery/max-8.jpg',
  '/gallery/max-9.jpg',
  '/gallery/max-10.jpg',
  '/gallery/max-11.jpg',
  '/gallery/max-12.jpg',
  '/gallery/max-13.jpg',
  '/gallery/max-14.jpg',
]

export const galleryItems: GalleryItem[] = galleryImages.map((image, index) => ({
  id: `gallery-${index + 1}`,
  image,
}))
