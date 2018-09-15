import React from "react";
import "./WorkshopCard.css";

const WorkshopCard = props => (
  <div className="card" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static">
    <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> {props.title}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
      </ul>
    </div>


<div class="modal fade" id="exampleModalCenter" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{props.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body workshop-body">
        <strong>Grade: </strong>{props.offerings[0].grade}
        <strong>Topic: </strong>{props.offerings[0].topic}
        <strong>Curriculum: </strong>{props.offerings[0].curriculum}
        <strong>Connection: </strong>{props.offerings[0].connection}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
);

export default WorkshopCard;
