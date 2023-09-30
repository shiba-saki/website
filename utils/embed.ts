export function getImgUrl(id: string) {
  return `https://i.ytimg.com/vi_webp/${id}/sddefault.webp`
  // https://i.ytimg.com/vi_webp/UNHV3xLILEg/sddefault.webp
}

export function getIframeHtml(id: string) {
  return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}
