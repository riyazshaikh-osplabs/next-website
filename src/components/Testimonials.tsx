import styles from "@/styles/styles"
import FeedbackCard from "./FeedbackCard"

const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: "/icons/people01.png",
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: "/icons/people02.png",

    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: "/icons/people03.png",

    },
];

const Testimonials = () => {
    return (
        <section id="clients" className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
            <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>
            <div className="flex md:flex-row flex-col w-full justify-between items-center sm:mb-16 mb-6
            relative z-[1]">
                <h2 className={styles.heading2}>What people are  <br className="sm:block hidden" />
                    saying about us
                </h2>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} w-full max-w-[450px]`}>
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((item) => (
                    <FeedbackCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials