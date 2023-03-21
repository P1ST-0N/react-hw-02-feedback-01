import { Component } from "react";
import FeedBackOptions from "./FeedBackOptions/FeedBackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

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
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      return {[e.target.name]: prevState[e.target.name] + 1};
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const feedback = Object.keys(this.state);
    const positivePerc = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Title>Feedback book</Title>
        <Wrapper>
          <Title>Please leave a feedback</Title>
          <Section>
            <FeedBackOptions
              options={feedback}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Section>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePerc}
              />
            </Section>
          )}
        </Wrapper>
      </>
    );
  }
}
