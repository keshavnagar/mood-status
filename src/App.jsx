import { use, useState } from "react";
const App = () => {
  const [isHappy, setIsHappy] = useState(false);
  const [isSad, setIsSad] = useState(false);
  const [isNeutral, setIsNeutral] = useState(false);
  return (
    <>
      <section className="">
        <h1>HOW ARE YOU FEELING TODAY</h1>
        <h2>select a mood below</h2>
        <div>
          <button onClick={() => setIsHappy(!isHappy)}>😊 Happy</button>
          <button onClick={() => setIsNeutral(!isNeutral)}>😐 Neutral</button>
          <button onClick={() => setIsSad(!isSad)}>😔 Sad</button>
        </div>
        {isHappy && (
          <p>
            Today is going to be amazing — your energy makes everything
            brighter!
          </p>
        )}
        {isNeutral && (
          <p>
            Everything is okay — take it slow, one step at a time, no pressure.
          </p>
        )}
        {isSad && (
          <p>
            Sometimes the heart feels heavy — but you're not alone, this phase
            will pass.
          </p>
        )}
      </section>
    </>
  );
};
export default App;
