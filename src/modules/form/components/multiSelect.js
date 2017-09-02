import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ListView, Text, TouchableWithoutFeedback, Image } from 'react-native'
import checkbox from '../../../assets/images/icon-checkbox.png'
import checkboxChecked from '../../../assets/images/icon-checkbox-checked.png'
import { styles } from './styles/multiSelect.styles'

const itemType = PropTypes.string

let dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.selected !== r2.selected
})

// https://github.com/tableflip/react-native-select-multiple
// TODO: Instead of copying Multiselect to our codebase, It'd be better having
// MultiSelect as a dependency and create a wrapper to redux-form
export class MultiSelect extends Component {
  constructor (props) {
    super(props)
    const rows = this.getRowData(props)
    dataSource = dataSource.cloneWithRows(rows)
  }

  componentWillReceiveProps (nextProps) {
    const rows = this.getRowData(nextProps)
    dataSource = dataSource.cloneWithRows(rows)
  }

  getRowData ({ items, input: { value } }) {
    let selectedItems = (value || []).map(this.toLabelValueObject)
    items = items.map(this.toLabelValueObject)

    items.forEach((item) => {
      item.selected = selectedItems.some((i) => i.value === item.value)
    })

    return items
  }

  onRowPress (row) {
    const { value, onChange } = this.props.input
    row = Object.assign({}, row)

    let selectedItems = (value || []).map(this.toLabelValueObject)

    const index = selectedItems.findIndex((selectedItem) => selectedItem.value === row.value)

    if (index >= 0) {
      selectedItems = selectedItems.filter((selectedItem) => selectedItem.value !== row.value)
    } else {
      selectedItems = selectedItems.concat(row)
    }

    onChange(selectedItems.map(this.toArray))
  }

  toArray (obj) {
    return obj.value
  }

  toLabelValueObject (obj) {
    if (Object.prototype.toString.call(obj) === '[object String]') {
      return { label: obj, value: obj }
    } else {
      return { label: obj.label, value: obj.value }
    }
  }

  render () {
    const { style } = this.props
    return (
      <ListView
        style={style}
        dataSource={dataSource}
        renderRow={this.renderItemRow} />
    )
  }

  renderItemRow = (row) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.onRowPress(row)}>
        <View style={styles.row}>
          <Image style={styles.checkbox} source={row.selected ? checkboxChecked : checkbox} />
          <Text style={styles.label}>{row.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

MultiSelect.propTypes = {
  items: PropTypes.arrayOf(itemType).isRequired,
  selectedItems: PropTypes.arrayOf(itemType)
}
