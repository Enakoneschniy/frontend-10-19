export default class Post {
  #privateProperty = 'dfff';
  constructor (title, text) {
    this.title = title;
    this.text = text;
    this.id = 2;
    this.shortText = 'fff'
  }
  renderListItem () {
    return `
      <article>
        <h1>${this.title}</h1>
        <div>${this.shortText}</div>
      </article>
    `
  }
  get shortText () {
    return this.text.substring(0, 100)
  }
  set shortText (value) {
   // fff
  }
  static test () {

  }
}
