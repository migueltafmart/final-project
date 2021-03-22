import React, { useContext } from "react";
import UserContext from "../../../Context/userContext";
import FAQCard from "./FAQCard/FAQCard";
import "./FAQMain.scss";
const FAQMain = () => {
  const {user} = useContext(UserContext)
  return (
    <main className="FAQ">
      <div className="wrapper">
        {user.role==="company"?<h2>Preguntas frecuentes</h2>:<h2>¿Como compaginarlo en cada fase?</h2>}
        <FAQCard
          q="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
        />
         <FAQCard
          q="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
        />
         <FAQCard
          q="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
        />
         <FAQCard
          q="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
        />
         <FAQCard
          q="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
        />
         <FAQCard
          q="¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
        />
      </div>
    </main>
  );
};

export default FAQMain;
