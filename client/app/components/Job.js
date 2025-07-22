import { Bookmark, Github, X } from "lucide-react";
import { useState } from "react";
import JobApplyForm from "./JobApplyForm";

export default function Job({ bg }) {
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      <div
        className={`${bg} p-6 rounded-lg shadow-md flex flex-col justify-between`}
      >
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Github />
          </div>
          <button>
            <Bookmark />
          </button>
        </div>
        <h3 className="text-lg font-bold mt-4">Java Developer</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">
          Build cutting-edge web applications from start to finish, utilizing
          your expertise in both front-end and back-end technologies.
        </p>
        <div className="flex space-x-2 mt-4">
          <span className="bg-white text-xs px-2 py-1 rounded-md border border-gray-100">
            Full Time
          </span>
          <span className="bg-white text-xs px-2 py-1 rounded-md border border-gray-100">
            Mid Level
          </span>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            className="w-full border border-gray-400 text-gray-800 py-2 rounded-lg"
            onClick={() => setShowDetailsModal(true)}
          >
            Details
          </button>
          <button
            className="w-full bg-black text-white py-2 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Apply Now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blur background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-lg p-8 z-10 min-w-[300px]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Apply for Java Developer</h2>
            <JobApplyForm onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}

      {showDetailsModal && (
        <ShowDetailsModal setShowDetailsModal={setShowDetailsModal} />
      )}
    </>
  );
}

function ShowDetailsModal({ setShowDetailsModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-5">
      {/* Blur background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={() => setShowDetailsModal(false)}
      />
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-lg p-8 z-10 w-full max-w-5xl h-[80vh] overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => setShowDetailsModal(false)}
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4">Java Developer</h2>
        <p className="mb-4 text-gray-700">
          Build cutting-edge web applications from start to finish, utilizing
          your expertise in both front-end and back-end technologies. You will
          work with a dynamic team, contribute to architecture decisions, and
          deliver robust solutions for our clients. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis deleniti nobis temporibus
          culpa neque necessitatibus totam error vel laboriosam repellat
          excepturi libero magni, nam architecto officia! Mollitia laudantium
          debitis quas porro a ipsam nulla, incidunt animi obcaecati quis
          provident, ipsum, veniam ex ducimus dolorem ea earum? Expedita
          necessitatibus qui illum aspernatur autem, mollitia voluptates
          obcaecati aut? Maiores ipsa mollitia enim dolor ad aspernatur
          reiciendis vel tempora dolorem, accusantium eius quisquam illum est
          pariatur eligendi soluta. Explicabo neque adipisci quibusdam pariatur
          quidem ex itaque inventore nisi dignissimos! Consequuntur dignissimos
          similique molestias, sit ullam et magnam assumenda vel blanditiis,
          sapiente tempore? Dolorem dignissimos enim exercitationem. Debitis
          adipisci deserunt molestias ipsam eius blanditiis repellendus
          veritatis ad id in quis ex amet totam, atque dolor esse suscipit
          voluptatibus maxime similique saepe dicta nemo perferendis. Nam at
          doloribus autem voluptates odit! Iusto deleniti nihil repudiandae
          facere consequuntur, mollitia saepe minus tenetur vel asperiores
          doloribus praesentium fuga sit totam reprehenderit perferendis
          consequatur quibusdam. At minima neque sint natus quos esse sequi
          cumque quaerat eveniet, corporis nostrum quibusdam inventore error
          repellat beatae? Cum quod, laborum temporibus porro minima fugit a
          numquam corporis dolor. Dolores corrupti perspiciatis recusandae magni
          sapiente cum nihil voluptatibus delectus sunt, eaque cumque tempora
          eligendi? Nesciunt beatae eaque quos quidem, obcaecati accusantium
          dolore commodi a, ducimus rerum velit dolor mollitia. Nisi hic atque
          consectetur, voluptatibus non ratione aspernatur mollitia laborum, qui
          soluta quia. Magnam saepe neque fuga adipisci voluptas quos odit esse
          totam pariatur labore dolor molestiae quam necessitatibus, similique
          voluptatem quo officia suscipit consectetur quisquam ex distinctio
          quod eaque? Dolores hic repellat id quae recusandae maiores provident
          excepturi labore sapiente unde in amet, voluptatem accusamus, commodi
          quos tempora. Mollitia dolore, voluptas magnam nemo aut impedit. Iste
          soluta in et impedit quia, esse cupiditate incidunt. Fugiat corporis
          quibusdam quam mollitia illo expedita saepe eveniet, maiores accusamus
          cum beatae eos et voluptates provident harum, tenetur inventore?
          Consectetur id quasi, libero explicabo nisi praesentium officia
          quaerat nostrum eaque, atque, dolorem vitae similique voluptate quod
          vel doloribus perferendis vero aut laborum debitis rem voluptatem. Quo
          sit earum alias blanditiis molestiae ad culpa nobis illo, fugit
          dignissimos, doloremque sunt maiores consequuntur. Aperiam veritatis
          repudiandae excepturi modi numquam nobis voluptate velit delectus
          vero. Repellendus pariatur quo reiciendis numquam quae dicta autem!
          Eveniet necessitatibus, quae odit asperiores enim inventore minima
          veritatis iusto corporis modi sunt obcaecati provident natus
          laudantium delectus cum quibusdam expedita deserunt id illo nostrum?
          Atque numquam ducimus, aliquid molestiae in qui sunt dolore,
          provident, incidunt minima voluptatem iste! Nesciunt repudiandae totam
          accusantium veritatis inventore. Dolores laudantium commodi aliquid
          consectetur id culpa enim voluptatibus quasi doloribus delectus vitae
          soluta placeat illo fugit dignissimos ut ab omnis, nobis voluptate
          repudiandae natus quo. Voluptatem voluptatibus soluta inventore neque,
          quis reprehenderit tempora ad fuga mollitia dolor harum similique
          repellat ex quia, vel aliquam amet perspiciatis. Temporibus excepturi
          nisi veritatis voluptatibus incidunt iste deserunt ipsa, eligendi
          molestias quae commodi asperiores, vitae dignissimos, culpa
          reprehenderit at recusandae suscipit quam doloremque veniam animi
          exercitationem libero ducimus non. Ad adipisci perferendis iusto,
          inventore voluptatum atque?
        </p>
        <ul className="mb-4 text-gray-600 list-disc pl-5">
          <li>Company: Example Corp</li>
          <li>Location: Remote</li>
          <li>Type: Full Time</li>
          <li>Level: Mid Level</li>
        </ul>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg w-full"
          onClick={() => setShowDetailsModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
