
export type PrimaryLinkProps = {
  text: string,
  ariaLabel?: string,
  title?: string,
  href: string,
  target: '_blank' | ''
}

export type SourceLinkProps = {
  scenario: string,
  sources: string[]
}
