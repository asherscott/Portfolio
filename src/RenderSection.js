function RenderSection({ data }) {
  const { title, links, description, listItems } = data;

  const renderLi = listItems.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <section>
      <h2>{title}</h2>
      <ul>
        <li>
          <a>{links.github}</a>
        </li>
        <li>
          <a>{links.website}</a>
        </li>
        <li>
          <a>{links.demo}</a>
        </li>
      </ul>
      <p>{description}</p>

      <ul>{renderLi}</ul>
    </section>
  );
}

export default RenderSection;
