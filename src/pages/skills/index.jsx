import PageTitle from "../../components/PageTitle"
import Section from "../../components/Section"
import SkillList from "../../components/SkillList"
import useData from "../../hooks/useData";

const Skills = () => {
  const {data} = useData("skills")

  return (
    <div><PageTitle>My Skills</PageTitle>
      <Section>
        <SkillList skillsData={data} />
      </Section>
    </div>
  )
}

export default Skills