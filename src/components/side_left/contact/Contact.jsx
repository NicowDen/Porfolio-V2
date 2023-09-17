import mc from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={mc.container}>
      <ul>
        <li className={mc.mail}>
          <a href="mailto:nicolas.j.grenier@gmail.com">
            <i className={`icon-email-outline `}></i>
          </a>
        </li>
        <li className={mc.linkedin}>
          <a href="https://www.linkedin.com/in/nicolas-grenier-509874235">
            <i className={`icon-linkedin-outline `}></i>
          </a>
        </li>
        <li className={mc.github}>
          <a href="https://github.com/NicowDen">
            <i className={`icon-github-outline `}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
