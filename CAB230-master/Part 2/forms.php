<?php 
	function input_builder($type, $divID, $id, $placeholder){
		?>
		<!--<?= $placeholder; ?> to be Entered, Checked and Validated-->
		<div id="<?= $divID; ?>">
			<label for="<?= $id; ?>"><?= $placeholder; ?>:</label>
			<input type="<?= $type; ?>" name="<?= $id; ?>" id="<?= $id; ?>" placeholder="<?= $placeholder; ?>" value="<?= $_POST[$id] ?? ''?>">
			<!--Error Message for <?= $placeholder; ?>-->
			<div class="error_message" id="<?= $id; ?>_error"></div>
		</div>
		<?php
	}	
?>