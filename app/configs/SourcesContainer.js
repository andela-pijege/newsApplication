class SourcesContainer {
  constructor() {
    this.sources = [];
  }

  add(id, name, description) {
    this.sources.push({
      href: `/articles/${id}`,
      header: name,
      description,
      title: name,
    });
  }

  search(title) {

  }

  get() {
    return this.sources;
  }

}

export default SourcesContainer;
