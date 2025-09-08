
import PropTypes from 'prop-types';
import styles from './Student.module.css';

function Student(prop){
    return(
        <div className={styles.student}>
            <p>Name : {prop.name}</p>
            <p>Age : {prop.age}</p>
            <p>Is Student : {prop.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
}

Student.propTypes = {   // ✅ lowercase p
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {  // ✅ works fine here
  name: "Guest",
  age: 25,
  isStudent: false,
};

export default Student;