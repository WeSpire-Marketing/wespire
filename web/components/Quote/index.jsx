export default function Quote({ value: { quoteAuthor, quoteAuthorJob, quoteText } }) {
  return (
    <figure
      className="my-[40px] rounded-[16px] bg-neverPreachy bg-quotes bg-[left_32px_top_32px] 
      bg-no-repeat p-8 pt-[104px]
      lg:py-8 lg:pl-[120px] lg:pr-[100px]"
    >
      <blockquote className="mb-8 border-none p-0 after:content-none">
        <span className="heading-4 not-italic before:content-none">{quoteText}</span>
      </blockquote>
      <figcaption className="subtitle-m flex flex-col gap-2 not-italic text-black">
        {quoteAuthor}
        <cite className="body-m not-italic text-secondary">{quoteAuthorJob}</cite>
      </figcaption>
    </figure>
  )
}
