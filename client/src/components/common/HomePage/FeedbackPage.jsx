

import React, { useState } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';

const FeedbackForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [firstVisit, setFirstVisit] = useState(true);
  const [primaryReason, setPrimaryReason] = useState('');
  const [foundNeeded, setFoundNeeded] = useState('all');
  const [userFriendliness, setUserFriendliness] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const feedback = {
      fullName,
      email,
      firstVisit,
      primaryReason,
      foundNeeded,
      userFriendliness,
    };

    console.log(feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Website Feedback Form</h2>

      <FormGroup>
        <Label for="fullName">Enter Your Full Name <span className="text-red-600">*</span></Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="email">Your Email address <span className="text-red-600">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </FormGroup>
    

      <FormGroup>
            <Label for="firstVisitYes">Is this the first time you have visited the website? <span className="text-red-600">*</span></Label>
            <div>
                <Input
                    id="firstVisitYes"
                    name="firstVisit"
                    type="radio"
                    value="yes"
                    checked={firstVisit === 'yes'}
                    onChange={() => setFirstVisit('yes')}
                />
                {' '}
                <Label for="firstVisitYes">Yes</Label>
            </div>
            <br />
            <div>
                <Input
                    id="firstVisitNo"
                    name="firstVisit"
                    type="radio"
                    value="no"
                    checked={firstVisit === 'no'}
                    onChange={() => setFirstVisit('no')}
                />
                {' '}
                <Label for="firstVisitNo">No</Label>
            </div>
        </FormGroup>

      <FormGroup>
        <Label for="primaryReason">What is the reason you chose this workshop?</Label>
        
        <Input
          id="primaryReason"
          name="primaryReason"
          type="textarea"
          value={primaryReason}
          onChange={(event) => setPrimaryReason(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="userFriendliness">User Friendliness <span className="text-red-600">*</span> </Label>
        <div className="star-rating">
          <Input
            id="star1"
            name="star"
            type="radio"
            value="1"
            onChange={(event) => setUserFriendliness(event.target.value)}
          />
          <Label for="star1">&#9733;</Label>

          <Input
            id="star2"
            name="star"
            type="radio"
            value="2"
            onChange={(event) => setUserFriendliness(event.target.value)}
          />
          <Label for="star2">&#9733;</Label>

          <Input
            id="star3"
            name="star"
            type="radio"
            value="3"
            onChange={(event) => setUserFriendliness(event.target.value)}
          />
          <Label for="star3">&#9733;</Label>

          <Input
            id="star4"
            name="star"
            type="radio"
            value="4"
            onChange={(event) => setUserFriendliness(event.target.value)}
          />
          <Label for="star4">&#9733;</Label>

          <Input
            id="star5"
            name="star"
            type="radio"
            value="5"
            onChange={(event) => setUserFriendliness(event.target.value)}
          />
          <Label for="star5">&#9733;</Label>
        </div>
      </FormGroup>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FeedbackForm;

