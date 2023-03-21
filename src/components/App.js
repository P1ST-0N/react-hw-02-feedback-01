import { Component } from "react";
import FeedBackOptions from "./FeedBackOptions/FeedBackOptions";

import { Wrapper, Section, Title } from "./Feedback.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positivPercentage = total
      ? Math.round((this.state.good / total) * 100)
      : 0;
    return positivPercentage;
  }

  render() {
    // const total = this.countTotalFeedback();
    // const {good, neutral, bad} = this.state;
    const feedback = Object.keys(this.state);
    // const positivPerc = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Title>Feedback book</Title>
        <Wrapper>
          <Section>
            <FeedBackOptions
              options={feedback}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section>
            dgdsfg
          </Section>
        </Wrapper>
      </>
    );
  }
}
