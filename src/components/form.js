import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { Component as FluxappComponent } from 'fluxapp';

const form = React.createFactory('form');

export default class RouteForm extends FluxappComponent {
  static propTypes = {
    to : PropTypes.string.isRequired,
    meta : PropTypes.object.isRequired,
    onSubmit : PropTypes.func,
  };

  static defaultProps = {
    meta : {},
  }

  constructor() {
    super(...arguments);

    this.props.onSubmit = this.props.onSubmit ? this.props.onSubmit : this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const context = this.getFluxappContext();
    const actions = context.getRouterActions();

    e.preventDefault();

    actions.go(this.props.to, this.props.meta);
  }

  render() {
    const props = _.extend({}, _.omit(this.props, ['to', 'meta']));

    return form(props);
  }
}
