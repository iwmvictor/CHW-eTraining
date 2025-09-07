export const formatPhoneNumber = (phone) => {
  const digits = phone.replace(/\D/g, "");
  const match = digits.match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
  }
  return phone; // fallback if not matching expected pattern
};

export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
