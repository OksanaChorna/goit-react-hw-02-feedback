import style from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <section>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Section;
