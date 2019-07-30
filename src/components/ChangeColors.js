import React from 'react';

class ChangeColors extends React.Component {

  state={
    value: 'white',

  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.value);
    document.body.style.background = this.state.value
    this.props.changeColor()
  }

  render() {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'aliceblue', 'aqua',
    'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blueviolet', 'brown',
    'burlywood',
    'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk',
    'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
    'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange',
    'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
    'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue',
    'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
    'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'honeydew',
    'indianred', 'hotpink', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
    'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow',
    'lightgreen', 'lime', 'linen', 'magenta', 'maroon', 'mintcream', 'midnightblue',
    'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
    'orangered', 'orchid', 'palegoldenrod', 'papayawhip', 'peachpuff', 'peru', 'pink',
    'powderblue', 'plum', 'rebeccapurple', 'rosybrown', 'saddlebrown', 'skyblue',
    'springgreen', 'steelblue', 'teal', 'thistle', 'tomato', 'turquoise']
    return (
      <div>
        <h1>Customize Your Colors</h1>
        <form>
          <label>
            Background color:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="aliceblue">Alice Blue</option>
              <option value="aqua">Aqua</option>
              <option value="aquamarine">Aquamarine</option>
              <option value="azure">Azure</option>
              <option value="beige">Beige</option>
              <option value="bisque">Bisque</option>
              <option value="black">Black</option>
              <option value="blanchedalmond">Blanched Almond</option>
              <option value="blue">Blue</option>
              <option value="blueviolet">Blue Violet</option>
              <option value="brown">Brown</option>
              <option value="burlywood">Burlywood</option>
              <option value="cadetblue">Cadet Blue</option>
              <option value="chartreuse">Chartreuse</option>
              <option value="chocolate">Chocolate</option>
              <option value="coral">Coral</option>
              <option value="cornflowerblue">Cornflowerblue</option>
              <option value="cornsilk">Cornsilk</option>
              <option value="crimson">Crimson</option>
              <option value="cyan">Cyan</option>
              <option value="darkblue">Darkblue</option>
              <option value="darkcyan">Dark Cyan</option>
              <option value="darkgoldenrod">Dark Goldenrod</option>
              <option value="darkgray">Dark Gray</option>
              <option value="darkgreen">Dark Green</option>
              <option value="darkkhaki">Dark Khaki</option>
              <option value="darkolivegreen">Dark Olive Green</option>
              <option value="darkorange">Dark Orange</option>
              <option value="darkorchid">Dark Orchid</option>
              <option value="darkred">Dark Red</option>
              <option value="darksalmon">Dark Salmon</option>
              <option value="darkseagreen">Dark Sea Green</option>
              <option value="darkslateblue">Dark Slate Blue</option>
              <option value="darkslategrey">Dark Slate Grey</option>
              <option value="darkturquoise">Dark Turquoise</option>
              <option value="darkviolet">Dark Violet</option>
              <option value="deeppink">Deep Pink</option>
              <option value="deepskyblue">Deep Sky Blue</option>
              <option value="dimgray">Dim Gray</option>
              <option value="dodgerblue">Dodger Blue</option>
              <option value="firebrick">Firebrick</option>
              <option value="floralwhite">Floral White</option>
              <option value="forestgreen">Forest Green</option>
              <option value="fuchsia">Fuchsia</option>
              <option value="gainsboro">Gainsboro</option>
              <option value="ghostwhite">Ghost White</option>
              <option value="gold">Gold</option>
              <option value="goldenrod">Goldenrod</option>
              <option value="green">Green</option>
              <option value="greenyellow">Green Yellow</option>
              <option value="honeydew">Honeydew</option>
              <option value="indianred">Indian Red</option>
              <option value="hotpink">Hotpink</option>
              <option value="indigo">Indigo</option>
              <option value="ivory">Ivory</option>
              <option value="khaki">Khaki</option>
              <option value="lavender">Lavender</option>
              <option value="lavenderblush">Lavender Blush</option>
              <option value="lawngreen">Lawn Green</option>
              <option value="lemonchiffon">Lemon Chiffon</option>
              <option value="lightblue">Light Blue</option>
              <option value="lightcoral">Light Coral</option>
              <option value="lightcyan">Light Cyan</option>
              <option value="lightgoldenrodyellow">Light Goldenrod Yellow</option>
              <option value="lightgreen">Light Green</option>
              <option value="lime">Lime</option>
              <option value="linen">Linen</option>
              <option value="magenta">Magenta</option>
              <option value="maroon">Maroon</option>
              <option value="mintcream">Mintcream</option>
              <option value="midnightblue">Midnight Blue</option>
              <option value="mistyrose">Misty Rose</option>
              <option value="moccasin">Moccasin</option>
              <option value="navajowhite">Navajo White</option>
              <option value="navy">Navy</option>
              <option value="oldlace">Oldlace</option>
              <option value="olive">Olive</option>
              <option value="olivedrab">Olive Drab</option>
              <option value="orange">Orange</option>
              <option value="orangered">Orange Red</option>
              <option value="orchid">Orchid</option>
              <option value="palegoldenrod">Pale Goldenrod</option>
              <option value="papayawhip">Papayawhip</option>
              <option value="peachpuff">Peachpuff</option>
              <option value="peru">Peru</option>
              <option value="pink">Pink</option>
              <option value="plum">Plum</option>
              <option value="powderblue">Powder Blue</option>
              <option value="purple">Purple</option>
              <option value="rebeccapurple">Rebecca Purple</option>
              <option value="red">Red</option>
              <option value="rosybrown">Rosy Brown</option>
              <option value="saddlebrown">Saddle Brown</option>
              <option value="skyblue">Sky Blue</option>
              <option value="springgreen">Spring Green</option>
              <option value="steelblue">Steel Blue</option>
              <option value="teal">Teal</option>
              <option value="thistle">Thistle</option>
              <option value="tomato">Tomato</option>
              <option value="turquoise">Turquoise</option>
              <option value="violet">Violet</option>
              <option value="wheat">Wheat</option>
              <option value="white">White</option>
              <option value="whitesmoke">White Smoke</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
          <button onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default ChangeColors
