interface DescriptionRendererProps {
  description: string;
}

const DescriptionRenderer = ({ description }: DescriptionRendererProps) => {
  if (description.includes('\n')) {
    const paragraphs = description.split('\n').filter(paragraph => paragraph.trim() !== '');
    return (
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }
  return <p className="leading-relaxed">{description}</p>;
};

export default DescriptionRenderer;
