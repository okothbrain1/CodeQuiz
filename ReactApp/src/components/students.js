import React from 'react'

    const Students = ({ students }) => {
      return (
        <div>
          <center><h1>Students List</h1></center>
          {students.map((student) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{student.id}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{student.lastName}</h6>
                <p class="card-text">{student.firstMidName}</p>
                <p class="card-text">{student.enrollmentDate}</p>
                <p class="card-text">{student.enrollments}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Students