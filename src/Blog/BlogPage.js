// // BlogPage.js
// import React from "react";
// import { useParams } from "react-router-dom";
// import { articles } from "../data/articlesData";

// const BlogPage = () => {
//   const { id } = useParams();
//   const article = articles.find(article => article.id === id);

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <main>
//       <div id="article-main">
//         <article>
//           <section className="articles-section">
//             <h1>{article.title}</h1>
//             <img src={article.image} alt={article.title} />
//             {article.paragraphs && Array.isArray(article.paragraphs) && (
//               <>
//                 {article.paragraphs.map((paragraph, index) => (
//                   <div key={index}>
//                     {paragraph.type === "text" && <p>{paragraph.content}</p>}
//                     {paragraph.type === "list" && (
//                       <ul>
//                         {paragraph.items.map((item, idx) => (
//                           <li key={idx}>{item}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ))}
//               </>
//             )}
//           </section>
//         </article>
//       </div>
//     </main>
//   );
// };

// export default BlogPage;
