import  { useState } from 'react';
import PropTypes from 'prop-types';

import {
SearchbarContainer,
SearchBtn,
SearchForm,
SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
const [inputData, setInputData] = useState('');
const handleSubmit = e => {
e.preventDefault();
onSubmit(inputData.toLowerCase());
setInputData('');
};

 const onChangeInput = e => {
setInputData(e.currentTarget.value);
};

return (
<SearchbarContainer>
<SearchForm onSubmit={handleSubmit}>
<SearchBtn type="submit"> &#128269;
</SearchBtn>
<SearchInput
       name="inputData"
       value={inputData}
       onChange={onChangeInput}
       type="text"
       autoComplete="off"
       autoFocus
       placeholder="Search images and photos"
     />
</SearchForm>
</SearchbarContainer>
);
};

Searchbar.propTypes = {
onSubmit: PropTypes.func.isRequired,
};
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import {
//   SearchbarContainer,
//   SearchBtn,
//   SearchForm,
//   SearchInput,
// } from './Searchbar.styled';

// export class Searchbar extends Component {
//   state = {
//     inputData: '',
//   };
//   onChangeInput = e => {
//     this.setState({ inputData: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.inputData);
//     this.setState({ inputData: '' });
//   };

//   render() {
//     const { inputData } = this.state.inputData;

//     return (
//       <SearchbarContainer>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchBtn type="submit"> &#128269;
//           </SearchBtn>
//           <SearchInput
//            name="inputData"
//            value={inputData}
//            onChange={this.onChangeInput}
//            type="text"
//            autoComplete="off"
//            autoFocus
//            placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </SearchbarContainer>
//     );
//   }
// }
// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };