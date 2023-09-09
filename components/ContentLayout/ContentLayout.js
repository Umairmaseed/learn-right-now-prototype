import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useDispatch, useSelector } from 'react-redux';
import {
  setContentType,
  setContentData,
  setChapterId,
} from '@/store/courseSlice';

function ContentLayout(props) {
  const {
    quizMarks: [quizMarks, setquizMarks],
  } = { ...(props.state || {}) };
  const dispatch = useDispatch();
  const chapterData = useSelector((state) => state.course.chapterData);
  const selectContent = (item) => {
    setquizMarks('');
    dispatch(setContentData(item));
    dispatch(setChapterId(item.id));
    dispatch(setContentType(item.type));
  };
  const CourseContentDynamic = chapterData.map((data) => {
    return (
      <AccordionItem className="accoridan-item">
        <AccordionItemHeading className="accoridan-heading">
          <AccordionItemButton className="accordion__button">
            {data.title}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {data.content.map((items) => {
            return (
              <ul>
                <li onClick={() => selectContent(items)}>
                  <span>
                    {items.type === 'ANNOUNCEMENT' ? (
                      <ion-icon name="volume-medium-outline"></ion-icon>
                    ) : null}
                    {items.type === 'video' ? (
                      <ion-icon name="logo-youtube"></ion-icon>
                    ) : null}
                    {items.type === 'QUIZ' ? (
                      <ion-icon name="bar-chart-outline"></ion-icon>
                    ) : null}
                    {items.type === 'other' ? (
                      <ion-icon name="reader-outline"></ion-icon>
                    ) : null}
                  </span>
                  <a href="#" className="content-name">
                    {items.title}
                  </a>
                </li>
              </ul>
            );
          })}
        </AccordionItemPanel>
      </AccordionItem>
    );
  });
  return (
    <Accordion
      allowMultipleExpanded={true}
      allowZeroExpanded={true}
      className="accoridan"
    >
      {CourseContentDynamic}
      {/* <AccordionItem className="accoridan-item">
        <AccordionItemHeading className="accoridan-heading">
          <AccordionItemButton className="accordion__button">
            What harsh truths do you prefer to ignore?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ul>
            <li>
              <a href="#" className="content-name">
                Video 1
              </a>
              <span>
                <ion-icon name="logo-youtube"></ion-icon>
              </span>
            </li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem> */}
    </Accordion>
  );
}

export default ContentLayout;
