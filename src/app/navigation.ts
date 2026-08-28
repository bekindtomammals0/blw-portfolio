const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Notes', href: '#notes' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export function getPrimaryNavigation(hasNotes: boolean) {
  return hasNotes
    ? navigation
    : navigation.filter((item) => item.href !== '#notes');
}
