import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

// export const ContactList = ({ options }) => {
//   return options.map(({ id, name, number }) => {
//     return (
//       <ul key={id}>
//         <ContactItem id={id} name={name} number={number}></ContactItem>
//       </ul>
//     );
//   });
// };

// ContactList.propTypes = {
//   children: PropTypes.node,
// };

export class ContactList extends Component {
  render() {
    return this.props.options.map(({ id, name, number }) => {
      return (
        <ul key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onClickDelete={() => this.props.onClickDelete(id)}
          ></ContactItem>
        </ul>
      );
    });
  }
}

ContactList.propTypes = {
  children: PropTypes.node,
};
