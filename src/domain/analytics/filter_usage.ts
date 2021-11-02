export default class FilterUsage {
  name: string
  percent: number
  total: number

  constructor(props: FilterUsage) {
    this.name = props.name
    this.percent = props.percent
    this.total = props.total
  }
}
