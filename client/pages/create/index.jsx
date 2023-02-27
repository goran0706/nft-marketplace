import CreateForm from "../../components/CreateForm";
import { Section, SectionTitle } from "../../styles";

const Create = () => {
  return (
    <Section>
      <SectionTitle level={2}>Create New Item</SectionTitle>
      <CreateForm />
    </Section>
  );
};

export default Create;
