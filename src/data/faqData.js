const faqData = [
    {
      question:
        "Why is ProjectSchool learning is different from other platforms with online courses?",
      answer: (
        <div className='faq-container-answer'>
          <p>
            ProjectSchool learning stands out from other platforms with online
            courses due to its emphasis on practical exercises over traditional
            theoretical approaches. Unlike many other programs that rely heavily
            on passive learning through lectures and readings, ProjectSchool
            prioritizes hands-on tasks that allow participants to directly engage
            with the subject matter.
          </p>
          <p>
            {" "}
            By immersing learners in practical activities, ProjectSchool
            facilitates a deeper understanding of concepts and their real-world
            application. This approach fosters the development of tangible skills
            and boosts learners' confidence as they actively apply what they're
            learning.
          </p>
          <p>
            {" "}
            ProjectSchool's focus on active participation and meaningful outcomes
            distinguishes it from platforms that predominantly offer theoretical
            knowledge. Rather than merely absorbing information, participants in
            ProjectSchool actively shape their learning journey through hands-on
            experiences, bridging the gap between theory and practice.
          </p>
          <p>
            {" "}
            In summary, ProjectSchool stands out by offering a dynamic learning
            experience that emphasizes experiential learning and practical
            knowledge, empowering learners to apply their newfound skills
            effectively in real-world scenarios.
          </p>
        </div>
      ),
    },
    {
      question:
        "Is ProjectSchool suitable for individuals who are new to programming and lack heavy theoretical knowledge?",
      answer: (
        <div className='faq-container-answer'>
          <p>
            Yes, our React school is suitable for beginners who have a basic
            understanding of programming concepts. While we prioritize practical
            exercises over theoretical learning, we do assume that students have
            some foundational knowledge in programming. This might include
            familiarity with concepts such as variables, loops, functions, and
            basic HTML/CSS.
          </p>
          <p>
            However, our program is designed to guide beginners through hands-on
            tasks that will help them develop practical skills and confidence in
            React programming. Whether you're new to programming or looking to
            expand your skills specifically in React, our approach focuses on
            active engagement and real-world application to facilitate learning
            and growth.
          </p>
        </div>
      ),
    },
    {
      question: "Are payments on ProjectSchool safe?",
      answer: (
        <div className='faq-container-answer'>
          <p>
            Sure! We're using Stripe solution. All transactions are SSL (Secure
            Socket Layer) protected. Your information and your donors information
            are securely transmitted during the processing of all payments.
          </p>
          <p>
            Stripe is a PCI Service Provider Level 1 which is the highest grade of
            payment processing security. You can rest assured that your donors
            information is safe and secure.
          </p>
          <p>
            All credit card numbers are encrypted and safely stored in Stripe's
            state of the art data-center. This ensures both the security and
            integrity of your donors information.
          </p>
        </div>
      ),
    },
    {
      question: "Is it safe to use codesandbox.io platform?",
      answer: (
        <div className='faq-container-answer'>
          <p>
            Certainly! CodeSandbox is generally considered a secure platform for
            coding, with measures in place to safeguard users' code and data. It
            prioritizes security by regularly updating its platform to address any
            potential vulnerabilities and offers users control over the privacy
            settings of their projects. Additionally, the platform has clear
            community guidelines to maintain respectful interactions among users,
            with appropriate actions taken against any violations.
          </p>
          <p>
            However, users should remain cautious when using third-party code and
            ensure they come from reputable sources to minimize the risk of
            including malicious code. While CodeSandbox encrypts data transmission
            and storage, users should still be mindful of the information they
            include in their projects, especially sensitive data. Ultimately,
            users play a role in the security of their code and data by practicing
            good coding practices and regularly reviewing permissions. Alternative
            platforms and additional security measures, such as code review and
            version control systems, can also be considered for added protection.
          </p>
        </div>
      ),
    },
  ];

  export {faqData}