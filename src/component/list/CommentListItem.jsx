import React from "react";
import styled from "styled-components";
import Comment from "./../../chapter_05/Comment";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 14px;
`;

function CommentListItem(props) {
  const { Comment } = props;

  return (
    <Wrapper>
      <ContentText>{Comment.content}</ContentText>
    </Wrapper>
  );
}
export default CommentListItem;
