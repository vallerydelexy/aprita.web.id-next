export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  export function slugify(string) {
    if(string){
      return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
    }
  }