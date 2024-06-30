console.log('offcanvas-body');

document.querySelector('.offcanvas-body').innerHTML = `

<label class="form-label" for="BookAASKey">Ваш персональный ключ:</label>
<div class="mb-3 input-group">
	<input class="form-control" type="password" id="BookAASKey" placeholder="ваш ключ" autocomplete="off"
		aria-label="Ваш персональный ключ" aria-describedby="BookAASKeyGlaz">
	<span class="input-group-text" id="BookAASKeyGlaz">см.</span>
</div>
<p></p>
<p>Персональный ключ можно получить бесплатно у нашего телеграм-бота по ссылке:
	<a target="_blank" href="https://t.me/fest2023_bookaas_bot">https://t.me/fest2023_bookaas_bot</a>
</p>
<p>Платформа «BookAAS» не хранит персональные данные пользователей. Мы используем для идентификации
	персональный ключ
	и переписываемся через телеграм-бота.</p>
<p></p>

<div class="accordion" id="accordionUchit">
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingOne">
			<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUchit"
				aria-expanded="true" aria-controls="collapseUchit">
				Для учителя
			</button>
		</h2>
		<div id="collapseUchit" class="accordion-collapse collapse show" aria-labelledby="headingOne"
			data-bs-parent="#accordionUchit">
			<div class="accordion-body">
				<label class="form-label" for="pubKeyTeach">Публичный ключ учителя:</label>
				<input class="form-control" type="text" id="pubKeyTeach" placeholder="ваш ключ" autocomplete="off"
					aria-label="Ваш персональный ключ" aria-describedby="pubKeyTeachInfo">
				<span class="input-group-text" id="pubKeyTeachInfo">инфо</span>
			</div>
		</div>
	</div>
</div>

<p>
	Задания можно распечатать на принтере. Страница адаптируется для печати на бумаге формата А4,
	вместо ссылок печатаются QR-коды, скрываются ненужные кнопки и панели. Для распечатки чистого задания нажмите кнопку
	<span id="makePrint">ПЕЧАТЬ
		ЧИСТОГО ЗАДАНИЯ</span>.

</p>
<p>
	Для распечатки заполненного задания нажмите кнопку <span id="makePrintWithValues">ПЕЧАТЬ ЗАПОЛНЕННОГО
		ЗАДАНИЯ</span>. На данном этапе разработки этот функционал выключен. Если он вам необходим, напишите на email
	bookaas232@gmail.com.

</p>
<p>
	Для очистки (сброса) формы нажмите кнопку <span id="clearForm">ОЧИСТКА ВСЕЙ ФОРМЫ</span>.

</p>

<img src="../images/chatbooklogo-black.svg" width="80" alt="BOOKaaS logo" />
<p>Серия основана в 2020 году К. Г. Страусовым.</p>
<p>Ответственный за литературную и методическую часть С. C. Бородич</p>
<p>Составители лексического и дидактического сопровождения проекта:</p>

<p>Старшее крыло:</p>
<p>Алла Бородич</p>
<p>Ирина Звягинцева</p>
<p>Елена Алехно</p>
<p>Ирина Ульянова (Россия)</p>
<p></p>
<p>Младшее крыло:</p>
<p>Ксения Битно</p>
<p>Олеся Лазерко</p>
<p>Кристина Щуровская</p>
<p>Маруся Соболь</p>


<p>
	Авторские иллюстрации размещены с любезного разрешения Д. Д. Ермакович, М. Д. Шурим и К. И. Картель.
</p>
<p>© 2022—2024 Константин Страусов, идея, разработка, дизайн.</p>
<p>© 2022—2024 Группа авторов проекта “КНИГА-ЧАТ”, текст.</p>
<p>© 2022—2024 Ксения Картель, Дарья Ермакович, Мария Шурим, иллюстрации.</p>
<p>© 2022—2024 Ксения Картель, дизайн.</p>
<p>Разрешается использование только для некоммерческих образовательных целей.</p>
<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
	<li class="nav-item">
		<a class="nav-link" aria-current="page" href="../index.html">Перейти к списку заданий</a>
	</li>
	<!-- <li class="nav-item">
                       <a class="nav-link" href="../index.html">К списку заданий</a>
                    </li>
                    <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                          aria-expanded="false">
                          Dropdown
                       </a>
                       <ul class="dropdown-menu dropdown-menu-light">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li>
                             <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                       </ul>
                    </li> -->
</ul>
<!-- <form class="d-flex mt-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success" type="submit">Search</button>
                 </form> -->


`;
