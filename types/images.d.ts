declare module '*.webp' {
  const src: import('next/dist/shared/lib/get-img-props').StaticImageData;
  export default src;
}
