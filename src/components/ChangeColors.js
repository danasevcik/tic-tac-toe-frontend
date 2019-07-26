import React from 'react';

class ChangeColors extends React.Component {

  state={
    value: 'magenta'
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value})
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
            Your color:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
              <option value="aliceblue">Alice Blue</option>
              <option value="aqua">Aqua</option>
              <option value="aquamarine">Aquamarine</option>
              <option value="azure">Azure</option>
              <option value="beige">Beige</option>
              <option value="bisque">Bisque</option>
              <option value="black">Black</option>
              <option value="blanchedalmond">Blanched Almond</option>
              <option value="blueviolet">Blueviolet</option>
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
            </select>
          </label>

          <button onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default ChangeColors
