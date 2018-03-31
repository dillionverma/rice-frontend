import React, { Component } from 'react';
import { Form, InputNumber, Select, Button } from 'antd';
import numeral from 'numeral';
const FormItem = Form.Item;
const Option = Select.Option;

class PriceInput extends React.Component {
  constructor(props) {
    super(props);

    const value = this.props.value || {};
    this.state = {
      number: value.number || 100,
      currency: value.currency || 'cad',
    };
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }

  handleNumberChange = (value) => {
    const number = value;
    if (isNaN(number)) return;
    if (!('value' in this.props)) this.setState({ number });
    this.triggerChange({ number });
  }

  handleCurrencyChange = (currency) => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  }

  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }
  render() {
    const state = this.state;
    return (
      <span>
        <InputNumber
          defaultValue={state.number}
          formatter={value => numeral(value/100).format('$0,0.00')}
          parser={value => numeral(value).value()}
          value={state.number}
          step={100}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="usd">CAD</Option>
          <Option value="cad">USD</Option>
        </Select>
      </span>
    );
  }
}

export default PriceInput;
