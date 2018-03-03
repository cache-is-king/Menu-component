import React from 'react';
import get from '../ajaxHelper';
import styles from './styles/MenuViewStyles.css';
import MenuItem from './MenuItem';

class MenuView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restId: 90976,
      menuType: 'lunch',
      tag: 'none',
      menuData: [],
    };
  }
  componentDidMount() {
    this.fetch();
  }
  fetch() {
    const { restId, menuType, tag } = this.state;
    get(restId, menuType, tag, (result) => {
      this.setState({
        menuData: result,
      });
    });
  }
  render() {
    return (
      <div className={styles.menuViewBox}>
        <div className={styles.title}>
          <h2>Menu</h2>
        </div>
        <div className={styles.menuNav}>
          <button className={styles.lunchBtn}>Lunch</button>
          <button className={styles.dinnerBtn}>Dinner</button>
          <button className={styles.dessertBtn}>Dessert</button>
          <select className="filterBox">
            <option value="gluten-free">gluten-free</option>
            <option value="vegan">vegan</option>
            <option value="vegetarian">vegetarian</option>r
          </select>
        </div>
        <div className={styles.itemList}>
          {
            this.state.menuData.map(elem => <MenuItem item={elem} />)
          }
        </div>
      </div>);
  }
}

export default MenuView;
