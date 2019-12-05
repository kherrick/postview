const render = ({ title }) => `
  <style>${`
      :host {
        display: block;
      }

      a {
        color: var(--links);
        font-weight: 700;
        text-decoration: none;
      }

      [data-survey-prompt] {
        background-color: var(--background);
        border-color: var(--border);
        border-radius: .25rem;
        border: 1px solid transparent;
        color: var(--text);
        margin-top: 1.5rem;
        padding: .75rem 1.25rem;
      }

      [data-icon]:before {
        content: attr(data-icon);
        font-family: Icons;
        margin-right: .5rem;
        speak: none;
      }
  `}</style>

  <div data-survey-prompt>
    <span aria-hidden="true" data-icon="&#xe0a3"></span>
    <strong>${title}</strong>

    <span>Please take our <a href="https://go.microsoft.com/fwlink/?linkid=2109206" target="_blank">brief survey</a></span> and tell us what you think.
  </div>
  `

customElements.define('survey-prompt', class extends HTMLElement {
  constructor() {
    super()

    this.container = document.createElement('div')
    this.container.innerHTML = render({ title: this.title })
    this.attachShadow({ mode: 'open' }).appendChild(this.container)
  }

  get title() {
    return this.getAttribute('title')
  }
})
