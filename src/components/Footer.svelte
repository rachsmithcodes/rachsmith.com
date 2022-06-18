<script>
  import Tags from "./Tags.svelte";

  export let tags;
</script>

<footer>
  <section class="">
    <h3 class="">Browse Notes by tag</h3>
    <Tags {tags} />
  </section>
  <section class="">
    <h3 class="">Acknowledgement of Country</h3>
    <p>
      I acknowledge the Gubbi Gubbi people, the Traditional Owners of the land
      and waterways where I live. I would like to pay my respects to Elders
      past, present and emerging.
    </p>
  </section>
  <section class="">
    <h3 class="">Get in touch</h3>
    <p>
      If you'd like to get in contact, feel free to email me at contact @
      rachsmith dot com.
    </p>
  </section>
  <section class="">
    © {new Date().getFullYear()} Rachel Smith
  </section>
</footer>
