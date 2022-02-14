declare class Request {
  url: string

  headers: Map<string, string>
}

interface Window {
  trans(key: string, parameters: object): string

  blessing: {
    base_url: string
    locale: string
    site_name: string
    version: string
    i18n: object
    extra: any
  }

  fetch: jest.Mock

  $: jest.Mock
}

declare let blessing: {
  base_url: string
  site_name: string
  locale: string
  version: string
  route: string
  extra: any
  i18n: object
  fetch: any
  event: any
}
