import React from "react";
import FAQCard from "./FAQCard/FAQCard";
import "./FAQMain.scss";
const FAQMain = ({ role }) => {
  return (
    <main className="FAQ">
      <div className="wrapper">
        {role === "company" ? (
          <>
            <h2>Preguntas frecuentes</h2>
            <FAQCard
              q="¿Qué tipo de ofertas son las más adaptadas a los cuidadores?"
              a="Los cuidadores tienen una situación personal especial y distinta a la de otros tipos de trabajadores. Nos obstante, sus capacidades y su profesionalidad no se ve mermada a raíz de su situación personal.|Desde el plan de integración laboral Cuidar al Cuidador hemos analizado cuales son los tipos de empleos que mejor se adaptan a las necesidades de los cuidadores. Se trata de trabajos íntegramente remotos con plazos de entrega flexibles y tareas que no supongan un estrés para el cuidador.|Hemos establecido diferentes categorías de empleo en las que el cuidador puede desempeñar perfecta la actividad laboral sin dejar sus funciones de lado. Estas actividades además están pensadas pata cubrir las necesidades que actualmente tienen las empresas. "
            />
            <FAQCard
              q="¿Cuáles son los tramites burocráticos que debe realizar la empresa?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="¿Cómo se establece la comunicación con los cuidadores?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="¿Qué formación necesitan los cuidadores? "
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="¿Qué disposición tienen los cuidadores para realizar sus funciones? "
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="¿Cómo puede la empresa colaborar de manera activa? "
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
          </>
        ) : (
          <>
            <h2>¿Como compaginarlo en cada fase?</h2>
            <FAQCard
              src
              q="¿Cómo puedo compaginar el trabajo con la evolución de la enfermedad?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="Fase I: Inicio de la enfermedad"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="Fase II: Evolución de la enfermedad"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="Fase III: Final de la enfermedad"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
            <FAQCard
              q="¿Como me reincorporo al mercado laboral?"
              a="Lorem ipsum dolor sit amet, consectetur adipiscing|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra facilisis vitae, pretium fusce elementum et curabitur tristique. Fames rhoncus mattis id sagittis erat et leo. Vel fames pulvinar convallis bibendum quis pellentesque adipiscing quis posuere. Sit nibh convallis in tellus. Nulla massa diam nisl ut.|Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet a faucibus et. Velit nisl elit egestas habitant est sed nec quis. Neque tellus, est, et cras a. Amet, urna rutrum leo elit. Dui dolor risus imperdiet vel neque, facilisis in. Nunc dictumst sed nulla mauris. Fames sed ante nisl venenatis. Etiam id amet, et nisi sociis tincidunt convallis egestas. Tellus vitae nunc odio eu ultrices volutpat."
            />
          </>
        )}
      </div>
    </main>
  );
};

export default FAQMain;
