import styled from "styled-components";
import PostCard from "../components/PostCard";
import ListHeader from "../components/ListHeader";
import PageNavigator from "../components/PageNavigator";

const ProjectData = {
  state: "모집중",
  title: "대학생을 위한 프로젝트 매칭 서비스",
  description: "활동기간 | 24.11.18 ~ 24.12.24",
  tag: "figma spring react"
}

const ProjectList = () => {
  return (
    <>
      <ListHeader type="프로젝트" />
      <Container>
        <GridWrapper>
          {Array.from({ length: 8 }, (_, index) => (
            <PostCard key={index} data={ProjectData} type="프로젝트" />
          ))}
        </GridWrapper>
      </Container>
      <PageNavigator />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: fit-content;
`;

export default ProjectList;