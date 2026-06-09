export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    return Promise.resolve(false)
  }
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) {
    return dateString
  }
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}
